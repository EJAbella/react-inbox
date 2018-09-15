import React from 'react'

const Toolbar = ({messages, toggleMultiRead, toggleMultiUnread}) => {

    let active = messages.filter(message => message.selected)
    let unread = messages.filter(message => !message.read)

    let readHandler = () => {
        toggleMultiRead()
    }

    let unreadHandler = () => {
        toggleMultiUnread()
    }

    return (
        <div className="row toolbar">
            <div className="col-md-12">
                <a className="btn btn-danger">
                    <i className="fa fa-plus"></i>
                </a>

                <p className="pull-right">
                    <span className="badge badge">{unread.length}</span>
                    unread messages
                </p>

                <button className="btn btn-default">
                    <i className="fa fa-square-o"></i>
                </button>

                <button
                    className="btn btn-default"
                    disabled={active.length < 1 ? true : null}
                    onClick={readHandler}
                >
                    Mark As Read
                </button>

                <button
                    className="btn btn-default"
                    disabled={active.length < 1 ? true : null}
                    onClick={unreadHandler}
                >
                    Mark As Unread
                </button>

                <select className="form-control label-select" disabled={active.length < 1 ? true : null}>
                    <option>Apply label</option>
                    <option value="dev">dev</option>
                    <option value="personal">personal</option>
                    <option value="gschool">gschool</option>
                </select>

                <select className="form-control label-select" disabled={active.length < 1 ? true : null}>
                    <option>Remove label</option>
                    <option value="dev">dev</option>
                    <option value="personal">personal</option>
                    <option value="gschool">gschool</option>
                </select>

                <button className="btn btn-default" disabled={active.length < 1 ? true : null}>
                    <i className="fa fa-trash-o"></i>
                </button>
            </div>
        </div>
    )
}

export default Toolbar