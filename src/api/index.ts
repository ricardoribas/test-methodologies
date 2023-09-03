import { fetchDataPoints } from "./module-1";
import { fetchLabels } from "./module-2";

export async function fetchData() {
  const dataPoints = await fetchDataPoints();
  const labels = await fetchLabels();

  console.log(dataPoints, labels);
}
