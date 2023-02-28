import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
export default function Dashboard() {
  return (
    <>
      <div className="container">
        <div className="row">
          <Tabs
            defaultActiveKey="dashboard"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="dashboard" title="Dashboard">
              <div className="container">
                <div className="row">
                  <div class="row">
                    <div class="col-xl-3 col-md-6 dash-lg-50">
                      <div class="card crypto-chart overflow-hidden dash-card-1">
                        <div class="card-header card-no-border">
                          <div class="media">
                            <div class="media-body">
                              <div class="coin-logo-img">
                                <img src="../assets/images/dash-icon-1.png" />
                              </div>
                              <h5>Today Deposit</h5>
                            </div>
                            <div class="media-end">
                              <h6>$2563</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-3 col-md-6 dash-lg-50">
                      <div class="card crypto-chart overflow-hidden dash-card-1">
                        <div class="card-header card-no-border">
                          <div class="media">
                            <div class="media-body">
                              <div class="coin-logo-img">
                                <img src="../assets/images/dash-icon-1.png" />
                              </div>
                              <h5>Today Withdrawal</h5>
                            </div>
                            <div class="media-end">
                              <h6>$2563</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="product" title="product">
              product
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
              contact
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}
