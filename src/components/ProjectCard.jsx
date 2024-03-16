import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function ProjectCard({ name }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <h2>{name}</h2>
      </CardContent>
    </Card>
  );
}
