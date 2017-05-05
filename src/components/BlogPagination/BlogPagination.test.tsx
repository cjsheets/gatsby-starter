import { render } from "enzyme";
import "jest";
import * as React from "react";
import { LinkProps } from "react-router";
import BlogPagination from "./BlogPagination";

const LinkStub = (props: any) => <div {...props} />;

describe("BlogPagination component", () => {
  it("should render nothing if only 1 page", () => {
    const pathname: string = "/blog/page/1/";
    const pageCount: number = 1;

    const wrapper = render(<BlogPagination pathname={pathname} Link={LinkStub} pageCount={pageCount} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render correctly 10 pages", () => {
    const pathname: string = "/blog/page/5/";
    const pageCount: number = 10;

    const wrapper = render(<BlogPagination pathname={pathname} Link={LinkStub} pageCount={pageCount} />);
    expect(wrapper).toMatchSnapshot();
  });
});