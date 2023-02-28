import React from "react";
import { Link } from "react-router-dom";

export default function EditProfile() {
  return (
    <div>
      <div className="row">
        <div className="col-xl-12">
          <form className="card">
            <div className="card-header pb-0">
              <h4 className="card-title mb-0">Edit profile</h4>
              <div className="card-options">
                <Link className="card-options-collapse" to="#">
                  <i className="fe fe-chevron-up"></i>
                </Link>
                <Link className="card-options-remove" to="#">
                  <i className="fe fe-x"></i>
                </Link>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label"> user profle</label>
                    <input type="file" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label"> userName</label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label"> Email</label>
                    <input className="form-control" type="email" />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer text-end">
              <button className="btn btn-primary" type="submit">
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
