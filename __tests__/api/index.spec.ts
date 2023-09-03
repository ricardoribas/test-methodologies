import { fetchData } from "../../src/api";
import { fetchDataPoints } from "../../src/api/module-1";
import { fetchLabels } from "../../src/api/module-2";

jest.mock("../../src/api/module-1", () => ({
  fetchDataPoints: jest.fn(() => Promise.resolve([3, 4, 5])),
}));
jest.mock("../../src/api/module-2", () => ({
  fetchLabels: jest.fn(() => Promise.resolve(["3", "4", "5"])),
}));

describe("Api Helpers", () => {
  it("Should fetch data", async () => {
    await fetchData();

    expect(fetchDataPoints).toHaveBeenCalledWith();
    expect(fetchLabels).toHaveBeenCalledWith();
    expect(fetchDataPoints).toHaveBeenCalledBefore(fetchLabels as jest.Mock);
  });
});
