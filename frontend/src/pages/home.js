import React, { Component } from "react";
// Components
import { Layout } from "../components/templates";
import { CardCampaign } from "../components/molecules";
// Data
import { connect } from "react-redux";
import { getDataCampigns } from "../reduxs/actions";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.props.getDataCampigns();
  }

  render() {
    const { campaigns, shorting } = this.props;

    const shortedData = [...campaigns];

    if (shorting === "donation-goal") {
      shortedData.sort((a, b) => { return a.donation_target - b.donation_target; });
    } else if (shorting === "days-left") {
      shortedData.sort((a, b) => { return a.days_remaining - b.days_remaining; });
    }

    return (
      <Layout>
        <section className="py-2">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {shortedData.map((campaign, i) => {
              return (
                <CardCampaign
                  key={i.toString()}
                  data={campaign}
                />  
              )
            })}
          </div>
        </section>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  campaigns: state.rdccampaigns.campaigns,
  shorting: state.rdccampaigns.shorting,
});

const mapDispatchToProps = (dispatch) => ({
  getDataCampigns: () => dispatch(getDataCampigns()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
