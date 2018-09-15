import React from 'react'

const Toolbar = ({messages, toggleMultiRead, toggleSelectAll, deleteMessage, toggleLabel, toggleComposeForm}) => {

    let active = messages.filter(message => message.selected)
    let unread = messages.filter(message => !message.read)

    let allSelected = messages.length === active.length

    return (
        <div className="row toolbar">
            <div className="col-md-12">
                <a onClick={() => toggleComposeForm()} className="btn btn-danger">
                    <i className="fa fa-plus"></i>
                </a>

                <p className="pull-right">
                    <span className="badge badge">{unread.length}</span>
                    unread messages
                </p>

                <button onClick={() => toggleSelectAll(!allSelected)} className="btn btn-default">
                    <i className="fa fa-square-o"></i>
                </button>

                <button
                    className="btn btn-default"
                    disabled={active.length < 1 ? true : null}
                    onClick={() => toggleMultiRead(true)}
                >
                    Mark As Read
                </button>

                <button
                    className="btn btn-default"
                    disabled={active.length < 1 ? true : null}
                    onClick={() => toggleMultiRead(false)}
                >
                    Mark As Unread
                </button>

                <select onChange={(e) => toggleLabel('addLabel', e.target.value)} className="form-control label-select" disabled={active.length < 1 ? true : null}>
                    <option>Apply label</option>
                    <option value="dev">dev</option>
                    <option value="personal">personal</option>
                    <option value="gschool">gschool</option>
                </select>

                <select onChange={(e) => toggleLabel('removeLabel', e.target.value)} className="form-control label-select" disabled={active.length < 1 ? true : null}>
                    <option>Remove label</option>
                    <option value="dev">dev</option>
                    <option value="personal">personal</option>
                    <option value="gschool">gschool</option>
                </select>

                <button onClick={() => deleteMessage()} className="btn btn-default" disabled={active.length < 1 ? true : null}>
                    <i className="fa fa-trash-o"></i>
                </button>
            </div>
        </div>
    )
}

export default Toolbar