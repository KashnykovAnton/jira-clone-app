import BugReportIcon from "@mui/icons-material/BugReport";
import FlagIcon from "@mui/icons-material/Flag";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import TourIcon from "@mui/icons-material/Tour";

export const importanceOptions = [
  { value: "Low", label: "Low" },
  { value: "Medium", label: "Medium" },
  { value: "High", label: "High" },
];

export const statusOptions = [
  { value: "TODO", label: "TODO" },
  { value: "In Progress", label: "In Progress" },
  { value: "Done", label: "Done" },
];

export const typeOptions = [
  { value: "Bug", label: "Bug" },
  { value: "Epic", label: "Epic" },
  { value: "Story", label: "Story" },
  { value: "Task", label: "Task" },
];

export const importanseSortOptions = [
  { value: "", label: "None" },
  { value: "ascending", label: "Ascending" },
  { value: "descending", label: "Descending" },
];

export const typeIcons = {
  Bug: <BugReportIcon color="error" />,
  Epic: <FlagIcon color="primary" />,
  Story: <FormatListBulletedIcon color="success" />,
  Task: <ErrorOutlineIcon color="action" />,
};

export const priorityIcons = {
  Low: <TourIcon color="success" />,
  Medium: <TourIcon color="warning" />,
  High: <TourIcon color="error" />,
};

export const importanceLevels = { Low: 1, Medium: 2, High: 3 };
