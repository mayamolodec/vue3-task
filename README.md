# vue3-task 
Project address:  https://vue3-task-8bb6eb.netlify.app/
## EN
This is a test **vue3** task. It has 4 pages: `Sales`, `Incomes`, `Ordes` and `Stocks`. The last one has slightly different query params.
Each page shows first 50 positions `limit:50` for 1 month (from `2025-04-01` to `2025-05-01`).

On the page you can see:
- the header with pages names
- a simpe histogramm of positions by warehouse
- the positions table with **pagination**, **one filter (also by warehouse)** <br>
(Filter value choise do not change histogramm.)

All data fetches form the server given for this task.

I used Bootstrap for styles.

# RU

Это тестовое задание по **vue3**. Есть 4 страницы: `Sales`, `Incomes`, `Ordes` and `Stocks`. Последняя имеет немного другой набор параметров запроса. Каждая страница показывает первые 50 позиций `limit:50`  списка для одного месяца (с `2025-04-01` по `2025-05-01`).

Каждая страница состоит из:
- шапка с ссылками на все 4 страницы
- гистограмма распреденения позиций по складам
- таблица с позициями, с **пагинацией** и одним **фильтром по названию склада** <br>
(Гистограмма не изменяется при выборе одной из опций.)

Все данные получаются `GET` запросом к предоставленному для задания серверу.

Для стилей использован Bootstrap.

