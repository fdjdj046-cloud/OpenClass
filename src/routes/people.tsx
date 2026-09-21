import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowUpRight, MapPin, Shield } from "lucide-react";
import { HtmlComment } from "@/components/html-comment";
import { IntranetShell } from "@/components/intranet-shell";
import { Note } from "@/components/briefing";
import { Button } from "@/components/ui/button";
import { employees, getEmployee } from "@/lib/employees";
import { markProgress } from "@/lib/progress";

type PeopleSearch = { id: string };

export const Route = createFileRoute("/people")({
  validateSearch: (search: Record<string, unknown>): PeopleSearch => {
    const raw = search.id;
    const id = raw == null ? "105" : String(raw).replace(/^"|"$/g, "");
    return { id: id || "105" };
  },
  component: PeoplePage,
});

function PeoplePage() {
  const { id } = Route.useSearch();
  const navigate = useNavigate({ from: "/people" });
  const employee = employees[id];
  const viewer = getEmployee(id);

  useEffect(() => {
    if (!new URLSearchParams(window.location.search).get("id")) {
      void navigate({ search: { id: "105" }, replace: true });
    }
  }, [navigate]);

  useEffect(() => {
    if (employee?.role === "admin") markProgress({ admin: true });
  }, [employee]);

  return (
    <IntranetShell employee={viewer} current="people">
      <HtmlComment text="Каталог: /people?id=105 стажёр, /people?id=1 администратор. Сервер не сверяет сессию с запрошенной карточкой." />
      <div className="relative isolate overflow-hidden border-b border-line">
        <img
          src="/images/office.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-paper/70" />
        <div className="relative mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
          <p className="text-[11px] uppercase tracking-[0.16em] text-mist">
            Кадровый каталог
          </p>
          <h1 className="font-display mt-2 text-4xl tracking-tight">Люди</h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-mist">
            Карточки сотрудников открываются по табельному номеру в адресе
            страницы.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 md:grid-cols-[minmax(0,1fr)_18rem] md:px-6 md:py-12">
        {employee ? (
          <ProfileCard id={id} />
        ) : (
          <section className="rounded-lg bg-sheet p-6 shadow-soft">
            <h2 className="font-display text-2xl">Сотрудник не найден</h2>
            <p className="mt-2 text-sm text-mist">
              В каталоге нет карточки с табельным номером {id}.
            </p>
          </section>
        )}

        <aside className="space-y-4">
          <div className="rounded-lg bg-sheet p-5 shadow-soft">
            <p className="text-xs uppercase tracking-[0.14em] text-mist">
              Прямая ссылка
            </p>
            <ShareField id={id} />
            <p className="mt-3 text-xs leading-relaxed text-subtle">
              Ссылку можно править и открыть заново — так передают карточку
              коллеге.
            </p>
          </div>
          <div className="rounded-lg bg-sheet p-5 shadow-soft">
            <p className="text-xs uppercase tracking-[0.14em] text-mist">
              Сегодня
            </p>
            <ul className="mt-3 space-y-3 text-sm">
              <li>
                <p className="font-medium">09:30 · Планерка смены</p>
                <p className="text-mist">Переговорная 3.12</p>
              </li>
              <li>
                <p className="font-medium">14:00 · Инструктаж по доступу</p>
                <p className="text-mist">Только для администраторов</p>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </IntranetShell>
  );
}

function ShareField({ id }: { id: string }) {
  const navigate = useNavigate({ from: "/people" });
  const [value, setValue] = useState(`https://one.meridian.ru/people?id=${id}`);

  useEffect(() => {
    setValue(`https://one.meridian.ru/people?id=${id}`);
  }, [id]);

  return (
    <form
      className="mt-3"
      onSubmit={(event) => {
        event.preventDefault();
        const match = value.match(/[?&]id=([^&]+)/);
        const next = match?.[1] ?? value.replace(/\D/g, "");
        if (next) void navigate({ search: { id: next } });
      }}
    >
      <input
        aria-label="Прямая ссылка на карточку"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="h-11 w-full rounded-md bg-paper px-3 font-mono text-xs text-ink shadow-soft outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      />
    </form>
  );
}

function ProfileCard({ id }: { id: string }) {
  const person = employees[id];
  if (!person) return null;
  const isAdmin = person.role === "admin";

  return (
    <article className="rounded-lg bg-sheet p-5 shadow-paper md:p-7">
      <div className="flex flex-col gap-6 sm:flex-row">
        <img
          src={person.photo}
          alt={person.name}
          className="h-56 w-44 rounded-md object-cover outline outline-1 -outline-offset-1 outline-ink/10 sm:h-60"
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-sm bg-paper px-2 py-1 text-[11px] uppercase tracking-[0.12em] text-mist">
              Таб. № {person.id}
            </span>
            <span
              className={
                isAdmin
                  ? "rounded-sm bg-ok-soft px-2 py-1 text-[11px] uppercase tracking-[0.12em] text-ok"
                  : "rounded-sm bg-paper px-2 py-1 text-[11px] uppercase tracking-[0.12em] text-mist"
              }
            >
              {isAdmin ? "Полный доступ" : person.role === "intern" ? "Гостевой доступ" : "Сотрудник"}
            </span>
          </div>
          <h2 className="font-display mt-3 text-3xl tracking-tight">{person.name}</h2>
          <p className="mt-1 text-sm text-mist">{person.title}</p>
          <p className="mt-4 max-w-prose text-sm leading-relaxed">{person.bio}</p>
          <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
            <Info label="Подразделение" value={person.dept} />
            <Info label="Почта" value={person.email} />
            <Info label="Телефон" value={person.phone} />
            <Info
              label="Рабочее место"
              value={person.location}
              icon={<MapPin className="size-3.5" />}
            />
            <Info label="В компании с" value={person.started} />
          </dl>
        </div>
      </div>

      {isAdmin ? (
        <div className="mt-8 border-t border-line pt-6">
          <Note>
            Карточка администратора открыта без проверки сессии — сервер отдал
            профиль по номеру в адресе.
          </Note>
          <div className="mt-5 flex flex-col gap-3 rounded-md bg-paper p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <Shield className="mt-0.5 size-4 text-ink" />
              <div>
                <p className="text-sm font-medium">Платформа данных</p>
                <p className="text-sm text-mist">
                  Производственный контур DC-MSK-3
                </p>
              </div>
            </div>
            <Button asChild>
              <Link to="/data">
                Открыть
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      ) : person.role === "intern" ? (
        <p className="mt-8 border-t border-line pt-5 text-sm text-mist">
          Гостевой доступ. Производственные системы скрыты. Если нужна чужая
          карточка — её номер указан в прямой ссылке.
        </p>
      ) : null}
    </article>
  );
}

function Info({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: ReactNode;
}) {
  return (
    <div>
      <dt className="text-xs text-subtle">{label}</dt>
      <dd className="mt-1 flex items-center gap-1.5">
        {icon}
        {value}
      </dd>
    </div>
  );
}
