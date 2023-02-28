import React from "react";
import { Link } from "react-router-dom";

export default function ChangePassword() {
  return (
    <>
      <div className="row">
        <div className="col-xl-12">
          <form className="card">
            <div className="card-header pb-0">
              <h4 className="card-title mb-0">Change Password</h4>
              <div className="card-options">
                <Link
                  className="card-options-collapse"
                  to="#"
                  data-bs-toggle="card-collapse"
                >
                  <i className="fe fe-chevron-up"></i>
                </Link>
                <Link
                  className="card-options-remove"
                  to="#"
                  data-bs-toggle="card-remove"
                >
                  <i className="fe fe-x"></i>
                </Link>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Current Password</label>
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Current Password"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">New Password</label>
                    <input
                      className="form-control"
                      type="password"
                      placeholder="New Password"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer text-end">
              <button className="btn btn-primary" type="submit">
                Update Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
