import React from 'react';

import '../assets/sample.css';

function Sample() {
  return (
<>
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <button
          className="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-collapse"
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand" href="/">
          Admin Panel
        </a>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#">
              <span className="glyphicon glyphicon-user">&nbsp;</span>Hello
              Admin
            </a>
          </li>
          <li className="active">
            <a title="View Website" href="#">
              <span className="glyphicon glyphicon-globe" />
            </a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="container-fluid">
    <div className="col-md-3">
      <div id="sidebar">
        <div className="container-fluid tmargin">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
            />
            <span className="input-group-btn">
              <button className="btn btn-default">
                <span className="glyphicon glyphicon-search" />
              </button>
            </span>
          </div>
        </div>
        <ul className="nav navbar-nav side-bar">
          <li className="side-bar tmargin">
            <a href="#">
              <span className="glyphicon glyphicon-list">&nbsp;</span>Dashboard
            </a>
          </li>
          <li className="side-bar">
            <a href="#">
              <span className="glyphicon glyphicon-flag">&nbsp;</span>Purok
            </a>
          </li>
          <li className="side-bar">
            <a href="#">
              <span className="glyphicon glyphicon-star">&nbsp;</span>Blotter
            </a>
          </li>
          <li className="side-bar">
            <a href="#">
              <span className="glyphicon glyphicon-certificate">&nbsp;</span>
              Officials
            </a>
          </li>
          <li className="side-bar">
            <a href="#">
              <span className="glyphicon glyphicon-signal">&nbsp;</span>
              Statistics
            </a>
          </li>
          <li className="side-bar">
            <a href="#">
              <span className="glyphicon glyphicon-cog">&nbsp;</span>Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="col-md-9 animated bounce">
      <h1 className="page-header">Dashboard</h1>
      <ul className="breadcrumb">
        <li>
          <span className="glyphicon glyphicon-home">&nbsp;</span>Home
        </li>
        <li>
          <a href="#">Dashboard</a>
        </li>
      </ul>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th className="text-center">#</th>
            <th>Title</th>
            <th className="text-center">Author</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/*
    <tr>
      <td><input type="checkbox" /></td>
      <td class="text-center">1</td>
      <td width="70%">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</td>
      <td class="text-center" width="10%">Admin</td>
      <td><span class="label label-info">Pending</span></td>
    </tr>
*/}
          {/* START CONTENT END */}
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td className="text-center">1</td>
            <td width="70%">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </td>
            <td className="text-center" width="10%">
              Admin
            </td>
            <td>
              <span className="label label-info">
                <span className="glyphicon glyphicon-time">&nbsp;</span>Pending
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td className="text-center">1</td>
            <td width="70%">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </td>
            <td className="text-center" width="10%">
              Admin
            </td>
            <td>
              <span className="label label-success">
                <span className="glyphicon glyphicon-ok-sign">&nbsp;</span>Live
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td className="text-center">1</td>
            <td width="70%">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </td>
            <td className="text-center" width="10%">
              Admin
            </td>
            <td>
              <span className="label label-success">
                <span className="glyphicon glyphicon-ok-sign">&nbsp;</span>Live
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td className="text-center">1</td>
            <td width="70%">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </td>
            <td className="text-center" width="10%">
              Admin
            </td>
            <td>
              <span className="label label-success">
                <span className="glyphicon glyphicon-ok-sign">&nbsp;</span>Live
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td className="text-center">1</td>
            <td width="70%">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </td>
            <td className="text-center" width="10%">
              Admin
            </td>
            <td>
              <span className="label label-success">
                <span className="glyphicon glyphicon-ok-sign">&nbsp;</span>Live
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td className="text-center">1</td>
            <td width="70%">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </td>
            <td className="text-center" width="10%">
              Admin
            </td>
            <td>
              <span className="label label-success">
                <span className="glyphicon glyphicon-ok-sign">&nbsp;</span>Live
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td className="text-center">1</td>
            <td width="70%">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </td>
            <td className="text-center" width="10%">
              Admin
            </td>
            <td>
              <span className="label label-success">
                <span className="glyphicon glyphicon-ok-sign">&nbsp;</span>Live
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td className="text-center">1</td>
            <td width="70%">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </td>
            <td className="text-center" width="10%">
              Admin
            </td>
            <td>
              <span className="label label-success">
                <span className="glyphicon glyphicon-ok-sign">&nbsp;</span>Live
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td className="text-center">1</td>
            <td width="70%">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </td>
            <td className="text-center" width="10%">
              Admin
            </td>
            <td>
              <span className="label label-success">
                <span className="glyphicon glyphicon-ok-sign">&nbsp;</span>Live
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td className="text-center">1</td>
            <td width="70%">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </td>
            <td className="text-center" width="10%">
              Admin
            </td>
            <td>
              <span className="label label-success">
                <span className="glyphicon glyphicon-ok-sign">&nbsp;</span>Live
              </span>
            </td>
          </tr>
          {/* DUMP CONTENT END */}
        </tbody>
      </table>
    </div>
  </div>
</>


  


     
  );
}

export default Sample;