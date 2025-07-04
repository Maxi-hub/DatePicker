# Custom Date Picker Component


## Обзор / Overview
Пользовательский инструмент выбора дат - это компонент на основе React, созданный по мотивам Elastic UI Frameworks EuiSuperDatePicker. Он предоставляет гибкий и удобный интерфейс для выбора диапазонов дат с поддержкой предопределенных периодов времени и пользовательских значений диапазона. Компонент предназначен для приложений, требующих фильтрации данных на основе времени, таких как информационные панели или аналитические платформы.
Компонент состоит из двух основных частей:
*Календарь*: Переключаемые элементы пользовательского интерфейса, которые отображают выбранный период и запускают функцию выбора даты.
*Выбранный блок*: панель для выбора предопределенных периодов времени (например, "Сегодня", "На этой неделе") или пользовательского диапазона (например, "Последние 30 дней").

The Custom Date Picker is a React-based component inspired by the Elastic UI Framework's EuiSuperDatePicker. It provides a flexible and user-friendly interface for selecting date ranges, with support for predefined time periods and custom range inputs. The component is designed for applications requiring time-based data filtering, such as dashboards or analytics platforms.
The component consists of two main parts:
Calendar: A toggleable UI element that displays the selected period and triggers the date picker panel.
SelectedBlock: A panel for selecting predefined time periods (e.g., "Today", "This Week") or custom ranges (e.g., "Last 30 Days").


## Особенности / Features
Предопределенные периоды времени: сделала для быстрого выбора распространенных временных диапазонов, таких как "Сегодня", "На этой неделе", "В этом месяце", "Вчера" и т.д.
Выбор пользовательского диапазона: позволяет пользователям указывать пользовательские временные диапазоны, используя комбинацию направления ("Последнее" или "Следующее"), числового значения и единицы измерения времени (например, секунды, минуты, дни).
Адаптивный дизайн: выполнила с использованием модульных SCSS для обеспечения единообразного и настраиваемого внешнего вида.

Predefined time periods: made for quick selection of common time ranges such as "Today", "This week", "This month", "Yesterday", etc.
Custom Range Selection: Allows users to specify custom time ranges using a combination of direction ("Last" or "Next"), numeric value, and time units (e.g. seconds, minutes, days).
Responsive design: Executed using modular CSS to ensure a consistent and customizable appearance.


## Взаимодействие с компонентами / Component Interaction:
Щелкните значок календаря в компоненте "Календарь", чтобы открыть панель "Выбранный блок".
Выберите предварительно определенный период (например, "Сегодня", "На этой неделе") из списка "Часто используемые".
В качестве альтернативы, используйте выпадающие списки и поле ввода, чтобы задать пользовательский диапазон (например, "Последние 30 дней") и нажмите "Применить".
Выбранный период отобразится в компоненте Календаря.
В результате появится кнопка календаря, при нажатии на которую открывается панель, позволяющая пользователям выбрать период времени. Выбранный период отображается рядом со значком календаря.

Click the calendar icon in the Calendar component to open the Selected Block panel.
Select a predefined period (e.g., "Today", "This Week") from the "Commonly used" list.
Alternatively, use the dropdowns and input field to define a custom range (e.g., "Last 30 Days") and click "Apply".
The selected period is displayed in the Calendar component.
This will render a calendar button that, when clicked, opens a panel allowing users to select a time period. The selected period is displayed next to the calendar icon.


## Будущие улучшения / Future Improvements
- Внедрить надежную логику фильтрации данных для динамической обработки и применения выбранных пользователем периодов времени как из предопределенных параметров (например, "Сегодня", "На этой неделе"), так и из пользовательских диапазонов (например, "Последние 30 минут"), что обеспечит плавную интеграцию с приложениями, управляемыми данными.
- Добавить поддержку для анализа пользовательских диапазонов (например, "Последние 30 дней") в реальных объектах данных с использованием date-and или аналогичных.
- Реализовать функцию автоматического обновления для периодического обновления данных на основе выбранного периода.
- Улучшить доступность с помощью улучшенных меток ARIA и навигации с клавиатуры.
Добавить поддержку локализации форматов данных и единиц измерения времени.

- Implement reliable data filtering logic for dynamic processing and application of user-selected time periods from both predefined parameters (for example, "Today", "This week") and from user ranges (for example, "Last 30 Minutes"), which will ensure smooth integration with data-driven applications.
- Add support for analyzing user ranges (for example, "Last 30 days") in real data objects using date-and or similar.
- Implement an automatic update function to periodically update data based on the selected period.
- Improve accessibility with improved ARIA tags and keyboard navigation.
Add support for localization of data formats and time units.


## Технологии и инструменты / Technologies and Tools
* React: библиотека JavaScript для создания пользовательских интерфейсов.
* TypeScript: надмножество JavaScript для типобезопасной разработки.
* Контекстный API React: для управления состоянием выбранного периода и обмена им между компонентами.
* SCSS (Sass): препроцессор CSS для модульного и поддерживаемого моделирования.
* Node.js и npm: для управления зависимостями и запуска среды разработки.
* Vite: инструмент сборки для быстрой разработки и комплектации.
* Значки SVG: используются для значков календаря и стрелок с атрибутами ARIA для обеспечения доступности.

* React: JavaScript library for building user interfaces.
* TypeScript: Superset of JavaScript for type-safe development.
* React Context API: For managing and sharing the selected period state between components.
* SCSS (Sass): CSS preprocessor for modular and maintainable styling.
* Node.js and npm: For managing dependencies and running the development environment.
* Vite (assumed, based on typical React setups): Build tool for fast development and bundling.
* SVG Icons: Used for calendar and arrow icons with ARIA attributes for accessibility.


## Установка зависимостей и запуск проекта / Installing dependencies and launching the project
Склонируйте репозиторий / Clone the repository:
* git clone https://github.com/Maxi-hub/DatePicker.git
* cd DatePicker
* npm install
* npm run dev
