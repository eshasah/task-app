import Task from "./Task";

function Tasks({ tasks, onTglStatus }){
    return (
        <div className="card">
            <div className="row">
                {tasks.map((task) => {
                    return(
                        <div className="col-12" key={task.id}>
                            <Task task={task} onTglStatus={onTglStatus}/>
                        </div>
                    );
                })}
                <div className="col-12"></div>
            </div>
        </div>
    );
}

export default Tasks