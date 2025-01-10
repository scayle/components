/* istanbul ignore file */
import './index.css';

import './components/OffCanvas/OffCanvas.css';
import './components/Input/Input.css';

import libraryPlugin from './plugin';

import { withPlugin } from './utils';

import { default as _AppHeader } from './components/AppHeader/AppHeader.vue';

import { default as _Badge } from './components/Badges/Badge.vue';

import { default as _Badges } from './components/Badges/Badges.vue';

import { default as _BarChartHorizontalStacked } from './components/Statistics/BarChartHorizontalStacked/BarChartHorizontalStacked.vue';

import { default as _Breadcrumbs } from './components/Breadcrumbs/Breadcrumbs.vue';

import { default as _BreadcrumbItem } from './components/Breadcrumbs/BreadcrumbItem.vue';

import { default as _ColorInput } from './components/ColorInput/ColorInput.vue';

import { default as _CountryFlag } from './components/CountryFlag/CountryFlag.vue';

import { default as _DoughnutChart } from './components/Statistics/DoughnutChart/DoughnutChart.vue';

import { default as _EmptyState } from './components/EmptyState/EmptyState.vue';

import { default as _FormField } from './components/FormField/FormField.vue';

import { default as _Input } from './components/Input/Input.vue';

import { default as _InfoBanner } from './components/InfoBanner/InfoBanner.vue';

import { default as _Textarea } from './components/Textarea/Textarea.vue';

import { default as _LineChart } from './components/Statistics/LineChart/LineChart.vue';

import { default as _VerticalBarChart } from './components/Statistics/VerticalBarChart/VerticalBarChart.vue';

import { default as _VerticalBarChartWrapper } from './components/Statistics/VerticalBarChart/VerticalBarChartWrapper.vue';

import { default as _ValueAnimation } from './components/NumbersWidget/ValueAnimation.vue';

import { default as _NumbersWidget } from './components/NumbersWidget/NumbersWidget.vue';

import { default as _SelectRemote } from './components/SelectRemote/SelectRemote.vue';

import { default as _StatisticsLegend } from './components/Statistics/StatisticsLegend/StatisticsLegend.vue';

import { default as _StatisticsTable } from './components/Statistics/StatisticsTable/StatisticsTable.vue';

import { default as _CurrencyInput } from './components/CurrencyInput/CurrencyInput.vue';

import { default as _CurrencyBehavior } from './components/CurrencyInput/CurrencyBehavior.vue';

import { default as _Spinner } from './components/Spinner/Spinner.vue';

import { default as _OffCanvas } from './components/OffCanvas/OffCanvas.vue';

import { default as _ResizeObserver } from './components/ResizeObserver/ResizeObserver.vue';

import { default as _HtmlEditor } from './components/HtmlEditor/HtmlEditor.vue';

import { default as _FileInput } from './components/FileInput/FileInput.vue';

import { default as _Popper } from './components/Popper/Popper.vue';

import { default as _DashboardStatistic } from './components/DashboardStatistic/DashboardStatistic.vue';

import { default as _DashboardList } from './components/DashboardList/DashboardList.vue';

import { default as _DashboardListItem } from './components/DashboardList/DashboardListItem.vue';

import { default as _Checkbox } from './components/Checkbox/Checkbox.vue';

import { default as _Tag } from './components/Tag/Tag.vue';

import { default as _TagInput } from './components/TagInput/TagInput.vue';

import { default as _CountrySelect } from './components/CountrySelect/CountrySelect.vue';

import { default as _SearchInput } from './components/SearchInput/SearchInput.vue';

import { default as _Card } from './components/Card/Card.vue';

import { default as _useConfig } from './composables/useConfig';

export * from './components/Dropdown';
export * from './components/Select';
export * from './components/Modal';
export * from './components/Tabs';
export * from './components/Pagination';
export * from './components/EntityListing';
export * from './components/Statistics/chart-utils';
export * from './composables/Notification';

export const useConfig = _useConfig;
export const AppHeader = withPlugin(_AppHeader);
export const Badge = withPlugin(_Badge);
export const Badges = withPlugin(_Badges);
export const BarChartHorizontalStacked = withPlugin(_BarChartHorizontalStacked);
export const Breadcrumbs = withPlugin(_Breadcrumbs);
export const BreadcrumbItem = withPlugin(_BreadcrumbItem);
export const ColorInput = withPlugin(_ColorInput);
export const CountryFlag = withPlugin(_CountryFlag);
export const DoughnutChart = withPlugin(_DoughnutChart);
export const EmptyState = withPlugin(_EmptyState);
export const FormField = withPlugin(_FormField);
export const LineChart = withPlugin(_LineChart);
export const VerticalBarChart = withPlugin(_VerticalBarChart);
export const VerticalBarChartWrapper = withPlugin(_VerticalBarChartWrapper);
export const ValueAnimation = withPlugin(_ValueAnimation);
export const NumbersWidget = withPlugin(_NumbersWidget);
export const SelectRemote = withPlugin(_SelectRemote);
export const StatisticsLegend = withPlugin(_StatisticsLegend);
export const StatisticsTable = withPlugin(_StatisticsTable);
export const Input = withPlugin(_Input);
export const InfoBanner = withPlugin(_InfoBanner);
export const Textarea = withPlugin(_Textarea);
export const CurrencyInput = withPlugin(_CurrencyInput);
export const CurrencyBehavior = withPlugin(_CurrencyBehavior);
export const Spinner = withPlugin(_Spinner);
export const ResizeObserver = withPlugin(_ResizeObserver);
export const OffCanvas = withPlugin(_OffCanvas);
export const HtmlEditor = withPlugin(_HtmlEditor);
export const FileInput = withPlugin(_FileInput);
export const Popper = withPlugin(_Popper);
export const DashboardStatistic = withPlugin(_DashboardStatistic);
export const DashboardList = withPlugin(_DashboardList);
export const DashboardListItem = withPlugin(_DashboardListItem);
export const Checkbox = withPlugin(_Checkbox);
export const Tag = withPlugin(_Tag);
export const TagInput = withPlugin(_TagInput);
export const CountrySelect = withPlugin(_CountrySelect);
export const SearchInput = withPlugin(_SearchInput);
export const Card = withPlugin(_Card);

export default libraryPlugin;
