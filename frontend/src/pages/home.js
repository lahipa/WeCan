import React, { Component } from "react";
import { Helmet } from "react-helmet";
// Components
import { Layout } from "../components/templates";
import { SectionCampaign } from "../components/organisms";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  render() {
    

    return (
      <Layout>
        <Helmet>
          <title>Kitabisa - Indonesia's Fundraising Platform</title>
          <meta property="title" content="Kitabisa - Indonesia's Fundraising Platform" />
          <meta property="type" content="website" />
          <meta property="url" content="http://localhost:3000" />
          <meta name="description" content="Aplikasi donasi dan zakat online untuk inisiatif, penggalangan dana dan program sosial. Mari bergotong royong membangun Indonesia!" />
          <meta property="og:url" content="http://localhost:3000" />
          <meta property="og:site_name" content="Kitabisa" />
          <meta property="og:description" content="Aplikasi donasi dan zakat online untuk inisiatif, penggalangan dana dan program sosial. Mari bergotong royong membangun Indonesia!" />
          <meta property="og:locale" content="id_ID" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Kitabisa - Indonesia's Fundraising Platform" />
          <meta property="og:hashtag" content="#Kitabisa #Fundraising" />
        </Helmet>
        
        <SectionCampaign />
        
      </Layout>
    );
  }
}

export default Home;
