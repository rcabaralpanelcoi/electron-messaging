import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

// import LeftSideBar from './components/LeftSideBar';
import ChatWindow from './components/ChatWindow';
import ProfileWindow from './components/ProfileWindow';
import UpdateProfileWindow from './components/UpdateProfileWindow';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      chatGroups: [
        {
          name: 'General',
          link: '/group/general',
        },
        {
          name: 'Video Responsive Survey',
          link: '/group/video-responsive-survey',
        },
        {
          name: '500rs',
          link: '/group/500rs',
        },
        {
          name: 'Warehouse',
          link: '/group/warehouse',
        }
      ],
      directChats: [
        {
          name: 'John Doe',
          link: '/message/jd10001hash',
          status: 'online',
          avatar: 'assets/img/user.jpg',
          messages: 1,
        },
        {
          name: 'John McDonald',
          link: '/message/mcd10001hash',
          status: 'away',
          avatar: 'assets/img/patient-thumb-02.jpg',
          messages: 4,
        },
        {
          name: 'Bob Marley',
          link: '/message/bob10001hash',
          status: 'offline',
          avatar: 'assets/img/patient-thumb-01.jpg',
          messages: 0,
        },
      ],
    }
  }
  
  render() {
    const { chatGroups, directChats } = this.state
    return (
    <Router>
    <div className="main-wrapper">    

      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div className="sidebar-menu">
            <ul>
              <li className="menu-title">Chat Groups <a href="#" className="add-user-icon" data-toggle="modal" data-target="#add_group"><i className="fa fa-plus"></i></a></li>
              {
                chatGroups.map((i, k) => {
                  return (                          
                    <li key={k}>
                      <Link to={i.link}>#{i.name}</Link>
                    </li>
                  )
                })
              }

              <li className="menu-title">Direct Chats <a href="#" className="add-user-icon" data-toggle="modal" data-target="#add_chat_user"><i className="fa fa-plus"></i></a></li>

              {
                directChats.map((i, k) => {
                  return (                          
                    <li key={k}>
                      <Link to={i.link}>
                        <span className="chat-avatar-sm user-img">
                          <img src={i.avatar} alt="" className="rounded-circle"/>
                          <span className={ `status ` + i.status }></span>
                        </span> {i.name} { (i.messages > 0)? <span className="badge badge-pill bg-danger float-right">{i.messages}</span> : null} 
                      </Link>
                    </li>
                  )
                })
              }

            </ul>
          </div>
        </div>
      </div>


      <div className="page-wrapper">

        <div className="chat-main-row">
          <div className="chat-main-wrapper">
            <div className="col-lg-9 message-view chat-view">

              <Switch>
                <Route exact path="/">
                  <ChatWindow {...this.props}/>
                </Route>
                <Route path="/message/:id">
                  <ChatWindow {...this.props}/>
                </Route>
                <Route path="/group/:id">
                  <ChatWindow {...this.props}/>
                </Route>
                <Route path="/profile">
                  <ProfileWindow />
                </Route>
                <Route exact path="/update-profile">
                  <UpdateProfileWindow {...this.props}/>
                </Route>
              </Switch>

            </div>

            <div className="col-lg-3 message-view chat-profile-view chat-sidebar" id="chat_sidebar">
              <div className="chat-window video-window">
                <div className="fixed-header">
                  <ul className="nav nav-tabs nav-tabs-bottom">
                    <li className="nav-item"><a className="nav-link" href="#calls_tab" data-toggle="tab">Calls</a></li>
                    <li className="nav-item"><a className="nav-link active" href="#profile_tab" data-toggle="tab">Profile</a></li>
                    <li className="nav-item"><a className="nav-link" href="#files_tab" data-toggle="tab">Files</a></li>
                  </ul>
                </div>
                <div className="tab-content chat-contents">
                  <div className="content-full tab-pane" id="calls_tab">
                    <div className="chat-wrap-inner">
                      <div className="chat-box">
                        <div className="chats">

                          <div className="chat chat-left">
                            <div className="chat-avatar">
                              <a href="/profile?ref_id=1234" className="avatar">
                              <img alt="Cristina Groves" src="assets/img/doctor-thumb-03.jpg" className="img-fluid rounded-circle"/>
                              </a>
                            </div>
                            <div className="chat-body">
                              <div className="chat-bubble">
                                <div className="chat-content">
                                  <span className="chat-user">You</span> <span className="chat-time">8:35 am</span>
                                  <div className="call-details">
                                    <i className="material-icons">phone_missed</i>
                                    <div className="call-info">
                                      <div className="call-user-details">
                                        <span className="call-description">Jeffrey Warden missed the call</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="chat chat-left">
                            <div className="chat-avatar">
                              <a href="/profile?ref_id=1234" className="avatar">
                              <img alt="Jennifer Robinson" src="assets/img/patient-thumb-02.jpg" className="img-fluid rounded-circle"/>
                              </a>
                            </div>
                            <div className="chat-body">
                              <div className="chat-bubble">
                                <div className="chat-content">
                                  <span className="chat-user">Jennifer Robinson</span> <span className="chat-time">8:35 am</span>
                                  <div className="call-details">
                                    <i className="material-icons">call_end</i>
                                    <div className="call-info">
                                      <div className="call-user-details"><span className="call-description">This call has ended</span></div>
                                      <div className="call-timing">Duration: <strong>5 min 57 sec</strong></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="chat-line">
                            <span className="chat-date">January 29th, 2015</span>
                          </div>
                          <div className="chat chat-left">
                            <div className="chat-avatar">
                              <a href="/profile?ref_id=1234" className="avatar">
                              <img alt="Cristina Groves" src="assets/img/doctor-thumb-03.jpg" className="img-fluid rounded-circle"/>
                              </a>
                            </div>
                            <div className="chat-body">
                              <div className="chat-bubble">
                                <div className="chat-content">
                                  <span className="chat-user">You</span> <span className="chat-time">8:35 am</span>
                                  <div className="call-details">
                                    <i className="material-icons">ring_volume</i>
                                    <div className="call-info">
                                      <div className="call-user-details">
                                        <a href="#" className="call-description call-description--linked" data-qa="call_attachment_link">Calling Jennifer ...</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-full tab-pane show active" id="profile_tab">
                    <div className="display-table">
                      <div className="table-row">
                        <div className="table-body">
                          <div className="table-content">
                            <div className="chat-profile-img">
                              <div className="edit-profile-img">
                                <img src="assets/img/doctor-03.jpg" alt=""/>
                                <span className="change-img">Change Image</span>
                              </div>
                              <h3 className="user-name m-t-10 mb-0"><a href="/profile">Cristina Groves</a> </h3>
                              <p className="mb-0"><small className="text-muted">Dept. Gynecology</small></p>
                              <small className="text-muted">Gynecologist</small>
                              <a href="/update-profile" className="btn btn-primary edit-btn"><i className="fa fa-pencil"></i></a>
                            </div>
                            <div className="chat-profile-info">
                              <ul className="user-det-list">
                                <li>
                                  <span>Username:</span>
                                  <span className="float-right text-muted">@cristina_groves</span>
                                </li>
                                <li>
                                  <span>DOB:</span>
                                  <span className="float-right text-muted">3rd March</span>
                                </li>
                                <li>
                                  <span>Email:</span>
                                  <span className="float-right text-muted">cristinagroves@example.com</span>
                                </li>
                                <li>
                                  <span>Phone:</span>
                                  <span className="float-right text-muted"> 770-889-6484</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content-full tab-pane" id="files_tab">
                    <div className="display-table">
                      <div className="table-row">
                        <div className="table-body">
                          <div className="table-content">
                            <div className="transfer-files">
                              <ul className="nav nav-tabs nav-tabs-solid nav-justified mb-0">
                                <li className="nav-item"><a className="nav-link active" href="#all_files" data-toggle="tab">All Files</a></li>
                                <li className="nav-item"><a className="nav-link" href="#my_files" data-toggle="tab">My Files</a></li>
                              </ul>
                              <div className="tab-content">
                                <div className="tab-pane show active" id="all_files">
                                  <ul className="files-list">
                                    <li>
                                      <div className="files-cont">
                                        <div className="file-type">
                                          <span className="files-icon"><i className="fa fa-file-pdf-o"></i></span>
                                        </div>
                                        <div className="files-info">
                                          <span className="file-name text-ellipsis">AHA Selfcare Mobile Application Test-Cases.xls</span>
                                          <span className="file-author"><a href="#">Loren Gatlin</a></span> <span className="file-date">May 31st at 6:53 PM</span>
                                        </div>
                                        <ul className="files-action">
                                          <li className="dropdown dropdown-action">
                                            <a href="" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-h"></i></a>
                                            <div className="dropdown-menu">
                                              <a className="dropdown-item" href="/">Download</a>
                                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#share_files">Share</a>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="tab-pane" id="my_files">
                                  <ul className="files-list">
                                    <li>
                                      <div className="files-cont">
                                        <div className="file-type">
                                          <span className="files-icon"><i className="fa fa-file-pdf-o"></i></span>
                                        </div>
                                        <div className="files-info">
                                          <span className="file-name text-ellipsis">AHA Selfcare Mobile Application Test-Cases.xls</span>
                                          <span className="file-author"><a href="#">John Doe</a></span> <span className="file-date">May 31st at 6:53 PM</span>
                                        </div>
                                        <ul className="files-action">
                                          <li className="dropdown dropdown-action">
                                            <a href="" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-h"></i></a>
                                            <div className="dropdown-menu">
                                              <a className="dropdown-item" href="/">Download</a>
                                              <a className="dropdown-item" href="#" data-toggle="modal" data-target="#share_files">Share</a>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

        <div id="drag_files" className="modal fade" role="dialog">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">Drag and drop files upload</h3>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body">
                <form id="js-upload-form">
                  <div className="upload-drop-zone" id="drop-zone">
                    <i className="fa fa-cloud-upload fa-2x"></i> <span className="upload-text">Just drag and drop files here</span>
                  </div>
                  <h4>Uploading</h4>
                  <ul className="upload-list">
                    <li className="file-list">
                      <div className="upload-wrap">
                        <div className="file-name">
                          <i className="fa fa-photo"></i> photo.png
                        </div>
                        <div className="file-size">1.07 gb</div>
                        <button type="button" className="file-close">
                        <i className="fa fa-close"></i>
                        </button>
                      </div>
                      <div className="progress progress-xs progress-striped">
                        <div className="progress-bar bg-success" role="progressbar" style={{'width': '65%'}}></div>
                      </div>
                      <div className="upload-process">37% done</div>
                    </li>
                    <li className="file-list">
                    <div className="upload-wrap">
                    <div className="file-name">
                    <i className="fa fa-file"></i> task.doc
                    </div>
                    <div className="file-size">5.8 kb</div>
                    <button type="button" className="file-close">
                    <i className="fa fa-close"></i>
                    </button>
                    </div>
                    <div className="progress progress-xs progress-striped">
                    <div className="progress-bar bg-success" role="progressbar" style={{'width': '65%'}}></div>
                  </div>
                  <div className="upload-process">37% done</div>
                  </li>
                  <li className="file-list">
                    <div className="upload-wrap">
                    <div className="file-name">
                    <i className="fa fa-photo"></i> dashboard.png
                    </div>
                    <div className="file-size">2.1 mb</div>
                    <button type="button" className="file-close">
                    <i className="fa fa-close"></i>
                    </button>
                    </div>
                    <div className="progress progress-xs progress-striped">
                      <div className="progress-bar bg-success" role="progressbar" style={{'width': '65%'}}></div>
                    </div>
                    <div className="upload-process">Completed</div>
                </li>
              </ul>
              </form>
              <div className="m-t-30 text-center">
                <button className="btn btn-primary submit-btn">Add to upload</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="add_group" className="modal fade">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Create a group</h3>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            <div className="modal-body">
              <p>Groups are where your team communicates. They’re best when organized around a topic — #leads, for example.</p>
              <form>
                <div className="form-group">
                  <label>Group Name <span className="text-danger">*</span></label>
                  <input className="form-control" type="text"/>
                </div>
                <div className="form-group">
                  <label>Send invites to: <span className="text-muted-light">(optional)</span></label>
                  <input className="form-control" type="text"/>
                </div>
                <div className="m-t-50 text-center">
                  <button className="btn btn-primary submit-btn">Create Group</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div id="add_chat_user" className="modal fade " role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Create Chat Group</h3>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            <div className="modal-body">
              <div className="input-group m-b-30">
                <input placeholder="Search to start a chat" className="form-control search-input" id="btn-input" type="text"/>
                <span className="input-group-append">
                <button className="btn btn-primary">Search</button>
                </span>
              </div>
              <div>
                <h5>Recent Conversations</h5>
                <ul className="chat-user-list">
                  <li>
                    <a href="#">
                      <div className="media">
                        <span className="avatar align-self-center">J</span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">Jeffery Lalor</div>
                          <span className="designation">Team Leader</span>
                        </div>
                        <div className="text-nowrap align-self-center">
                          <div className="online-date">1 day ago</div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="media ">
                        <span className="avatar align-self-center">B</span>
                        <div className="media-body align-self-center text-nowrap">
                          <div className="user-name">Bernardo Galaviz</div>
                          <span className="designation">Web Developer</span>
                        </div>
                        <div className="align-self-center text-nowrap">
                          <div className="online-date">3 days ago</div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="media">
                        <span className="avatar align-self-center">
                        <img src="assets/img/user.jpg" alt="John Doe"/>
                        </span>
                        <div className="media-body text-nowrap align-self-center">
                          <div className="user-name">John Doe</div>
                          <span className="designation">Web Designer</span>
                        </div>
                        <div className="align-self-center text-nowrap">
                          <div className="online-date">7 months ago</div>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="m-t-50 text-center">
                <button className="btn btn-primary submit-btn">Create Group</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="share_files" className="modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Share File</h3>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            <div className="modal-body">
              <div className="files-share-list">
                <div className="files-cont">
                  <div className="file-type">
                    <span className="files-icon"><i className="fa fa-file-pdf-o"></i></span>
                  </div>
                  <div className="files-info">
                    <span className="file-name text-ellipsis">AHA Selfcare Mobile Application Test-Cases.xls</span>
                    <span className="file-author"><a href="#">Bernardo Galaviz</a></span> <span className="file-date">May 31st at 6:53 PM</span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Share With</label>
                <input className="form-control" type="text"/>
              </div>
              <div className="m-t-50 text-center">
                <button className="btn btn-primary submit-btn">Share</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="notification-box">
        <div className="msg-sidebar notifications msg-noti">
          <div className="topnav-dropdown-header">
            <span>Messages</span>
          </div>
          <div className="drop-scroll msg-list-scroll" id="msg_list">
            <ul className="list-box">
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">R</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">Richard Miles </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item new-message">
                    <div className="list-left">
                      <span className="avatar">J</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">John Doe</span>
                      <span className="message-time">1 Aug</span>
                      <div className="clearfix"></div>
                      <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">T</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author"> Tarah Shropshire </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">M</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">Mike Litorus</span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">C</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author"> Catherine Manseau </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">D</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author"> Domenic Houston </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">B</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author"> Buster Wigton </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">R</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author"> Rolland Webber </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">C</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author"> Claire Mapes </span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">M</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">Melita Faucher</span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">J</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">Jeffery Lalor</span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">L</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">Loren Gatlin</span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="chat.html">
                  <div className="list-item">
                    <div className="list-left">
                      <span className="avatar">T</span>
                    </div>
                    <div className="list-body">
                      <span className="message-author">Tarah Shropshire</span>
                      <span className="message-time">12:28 AM</span>
                      <div className="clearfix"></div>
                      <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="topnav-dropdown-footer">
            <a href="chat.html">See all messages</a>
          </div>
        </div>
      </div>
      </div>

    </div>
    </Router>
    );
  }
}


export default App;
