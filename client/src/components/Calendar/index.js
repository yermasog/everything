import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { set } from "mongoose";
import "./calendar.css";
import React, { useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");

const localizer = momentLocalizer(moment);
// const MyEventsList = [
//   {
//     title: "Gwennie's birthday party",
//     start: "date",
//     end: "date",
//     allDay?: false,
//   }
// ]

const MyCalendar = (props) => {
  {
    /* MODAL1 STYLES */
  }
  const customStyles1 = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      zIndex: 1001,
      transform: "translate(-50%, -50%)",
      maxHeight: "100vh",
      overflowY: "auto",
      background: "#fff",
    },
    overlay: {
      zIndex: 1000,
      backgroundColor: "rgb(72,72,72,.95)",
    },
  };
  {
    /* MODAL2 STYLES */
  }
  const customStyles2 = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      zIndex: 1001,
      transform: "translate(-50%, -50%)",
      maxHeight: "100vh",
      overflowY: "auto",
      background: "rgba(243, 32, 19,.8)",
    },
    overlay: {
      zIndex: 1000,
      backgroundColor: "rgb(72,72,72,.95)",
    },
  };
  // STATE FOR ADD EVENT MODAL OPEN/CLOSE \\
  const [modalIsOpen1, setModalIsOpen1] = useState(false);

  // STATE FOR DELETE EVENT MODAL OPEN/CLOSE \\
  const [modalIsOpen2, setModalIsOpen2] = useState(false);

  // STATE FOR ARRAY OF ALL EVENTS \\
  const [events, setEvents] = useState([]);

  // STATE FOR NEW EVENT \\
  const [event, setEvent] = useState({});

  // STATE FOR DELETE EVENT \\
  const [eventDelete, setEventDelete] = useState([]);

  // DELETE EVENT FROM EVENTDELETE STATE \\
  const deleteEvent = () => {
    const allEvents = [...events];
    const newEvents = allEvents.filter(
      ({ title }) => title != eventDelete.title
    );
    setEvents(newEvents);
    setModalIsOpen2(false);
  };

  // ADD SELECTED EVENT TO BE DELETED TO EVENTDELETE STATE \\
  const onSelectEvent = (pEvent) => {
    setEventDelete(pEvent);
    setModalIsOpen2(true);
  };

  // START ADD/DISPLAY NEW CALENDAR EVENT \\
  const handleSelect = ({ start, end }) => {
    setEvent({ ...event, start, end });
    setModalIsOpen1(true);
  };

  // ADD VALUE INPUT FROM FORM AND ADD NEW EVENT TO EVENTS \\
  const saveEvent = () => {
    if (event.title) setEvents([...events, event]);
    setEvent({});
    setModalIsOpen1(false);
  };
  return (
    <>
      <div className="padding-3">
        <Calendar
          popup
          selectable
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 550 }}
          onSelectEvent={(event) => alert(event.title)}
          onSelectEvent={(event) => onSelectEvent(event)}
          onSelectSlot={handleSelect}
        />
      </div>
      <Modal
        isOpen={modalIsOpen1}
        style={customStyles1}
        onRequestClose={() => setModalIsOpen1(false)}
        closeTimeoutMS={500}
      >
        <div className="flex-container">
          <div class="grid-x grid-margin-x small-up-5 ">
            <div
              className="cell"
              style={{
                width: "100%",
                padding: "10vh",
                margin: "auto",
              }}
            >
              <div
                className="card"
                style={{ minHeight: "200px", width: "100%" }}
              >
                <div className="card-section medium-8 cell">
                  <h4>Title Of Appointment</h4>

                  <input
                    onChange={(e) =>
                      setEvent({ ...event, title: e.target.value })
                    }
                    type="text"
                    placeholder=""
                    value={event.title}
                  ></input>

                  <a
                    style={{ border: "1px solid white", fontWeight: "bold" }}
                    onClick={() => saveEvent()}
                    class="button primary"
                    href="#/"
                  >
                    Submit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={modalIsOpen2}
        style={customStyles2}
        onRequestClose={() => setModalIsOpen2(false)}
        closeTimeoutMS={500}
      >
        <div className="flex-container">
          <div class="grid-x grid-margin-x small-up-5 ">
            <div
              className="cell"
              style={{
                width: "100%",
                padding: "10vh",
                margin: "auto",
              }}
            >
              <div
                className="card"
                style={{ minHeight: "auto", width: "100%" }}
              >
                <div className="card-section medium-8 cell">
                  <h4>Confirm Delete</h4>
                  <i
                    onClick={() => deleteEvent()}
                    className="fa fa-check-square"
                    style={{
                      fontSize: "5vh",
                      color: "green",
                    }}
                  ></i>
                  <i
                    onClick={() => setModalIsOpen2(false)}
                    className="fa fa-window-close "
                    style={{
                      fontSize: "5vh",
                      color: "red",
                    }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MyCalendar;
