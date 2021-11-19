import React from "react";
import { connect } from "react-redux";
// Components
import { Logo, Button } from "../../atoms";

const Header = (props) => {
  const { shorting, shortingBy } = props;

  const handleShorting = (value) => {
    shortingBy(shorting === value ? "" : value);
  };

  return (
    <header className="py-10">
      <div className="container sm:mx-auto px-5 flex flex-col gap-10 sm:flex-row items-center sm:justify-between">
        <Logo />
        <div className="flex flex-row gap-4">
          <Button onClick={() => handleShorting("donation-goal")}>
            Sort by Donation Goal
          </Button>
          <Button onClick={() => handleShorting("days-left")}>
            Sort by Days Left
          </Button>
        </div>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => ({
  shorting: state.rdccampaigns.shorting,
});

const mapDispatchToProps = (dispatch) => ({
  shortingBy: (value) => dispatch({ type: "SHORTING_CAMPAIGN", shorting: value }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
