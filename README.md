# vue3-task

## EN
This is a test **vue3** task. It has 4 pages: `Sales`, `Incomes`, `Ordes` and `Stocks`. Stocks has slightly different query params.
Each page shows first 50 positions (limit:50) for 1 month (from `2025-04-01` to `2025-05-01`).
On the top of each page the is a simpe histogramm of positions by warehouse.
Pages have pagination, one filter (also by warehouse). Filter value choise do not change histogramm.
All data fetches form the server given for this task.
I used Bootstrap styles.

# RU

Это тестовое задание по **vue3**. Есть 4 страницы: `Sales`, `Incomes`, `Ordes` and `Stocks`. Последняя имеет немного другой набор параметров запроса. Каждая страница показывает первые 50 (limit:50) позиций списка для одного месяца (с `2025-04-01` по `2025-05-01`).
В верху каждой странице представлена гистограмма распреденения позиций по складам. Так же есть фильр для выбора всех позиций с одного склада. Гистограмма не изменяется при выборе одной из опций.
Все данные получаются GET запросом к предоставленному для задания серверу.
Для стилей использован Bootstrap.

