import React from "react";
import ReactDOM from "react-dom";
import { cleanup, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// Components
import App from "./App";
import { Button } from "./components/atoms";
import { CardCampaign } from "./components/molecules";

const data = {
  campaigner: "Rachel Vennya",
  campaigner_badge: "https://assets.kitabisa.com/images/icon__verified-user.svg",
  campaigner_is_verified: true,
  campaigner_type: "PERSONAL",
  category_name: "Bencana Alam",
  custom_fb_pixel: "",
  days_remaining: 0,
  donation_percentage: 1.0441785,
  donation_received: 522089246,
  donation_target: 500000000,
  expired: 2147483647,
  id: 95887,
  image: "https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/campaign/95887/31_95887_1545573085_140965_f.jpg",
  is_featured: 0,
  is_forever_running: true,
  is_open_goal: false,
  order: 8,
  parent_project_id: 95686,
  request_userdata: false,
  short_url: "racheluntukbanten",
  title: "Rachel Untuk Tsunami Banten dan Lampung",
};

// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it("Render app without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("Components rendering", () => {
  it("Render button correctly", () => {
    const { getByTestId } = render(<Button>Click Me</Button>);

    expect(getByTestId("button")).toHaveTextContent("Click Me");
  });

  it("Render card correctly", () => {
    const { getByTestId } = render(<CardCampaign data={data} />);

    expect(getByTestId("card")).toHaveTextContent("Rachel Untuk Tsunami Banten dan Lampung");
  });

  it("Bar color red if donation reached inside card", () => {
    const { getByTestId } = render(<CardCampaign data={data} />);

    expect(getByTestId("progress").classList.contains("bg-red-500")).toBeTruthy();
  });
});
