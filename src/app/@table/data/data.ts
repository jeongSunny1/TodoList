import {
  HelpCircle,
  Circle,
  Timer,
  CheckCircle2,
  XCircle,
  ArrowDown,
  ArrowRight,
  ArrowUp,
} from "lucide-react";

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
];

export const statuses = [
  {
    value: "완료",
    label: "완료",
    icon: CheckCircle2,
  },
  {
    value: "대기",
    label: "대기",
    icon: Timer,
  },
  {
    value: "실패",
    label: "실패",
    icon: XCircle,
  },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDown,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRight,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUp,
  },
];
