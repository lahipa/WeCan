import React, { useEffect } from "react";
// Components
import { CardCampaign } from "../../molecules";
// Data
import { connect } from "react-redux";
import { getDataCampigns } from "../../../reduxs/actions";

function HomeSectionCampaign(props) {
  const { campaigns, shorting } = props;

  useEffect(() => {
    props.getDataCampigns();
  }, []);

  const shortedData = [...campaigns];

  if (shorting === "donation-goal") {
    shortedData.sort((a, b) => { return a.donation_target - b.donation_target; });
  } else if (shorting === "days-left") {
    shortedData.sort((a, b) => { return a.days_remaining - b.days_remaining; });
  }
    
  return (
    <section className="py-2">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {shortedData.map((campaign, i) => {
          return <CardCampaign key={i.toString()} data={campaign} />;
        })}
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  campaigns: state.rdccampaigns.campaigns,
  shorting: state.rdccampaigns.shorting,
});

const mapDispatchToProps = (dispatch) => ({
  getDataCampigns: () => dispatch(getDataCampigns()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeSectionCampaign);
