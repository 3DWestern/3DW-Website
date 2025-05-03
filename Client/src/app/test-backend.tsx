  export default function Test () {
    const [users, setUsers] = useState([]);
    const [printJobs, setPrintJobs] = useState([]);
    const [cost, setCost] = useState(0);

    useEffect(() => {

        // Get users from database
        fetch("http://localhost:5000/users", {
        method: "GET"
        })
        .then(response => response.json())
        .then(data => setUsers(
        data.map((user: {
            email: string,
            name: {first: string, last: string},
            _id: {student_id: number},
            account_created: string,
            membership: string
        }) => 
            <div className="px-5">
            <div className="text-xl">{user.name.first} {user.name.last}</div>
            <ul>
                <li className="px-5">- Student number: {user._id.student_id}</li>
                <li className="px-5">- Email: {user.email}</li>
                <li className="px-5">- Account created on: {user.account_created.substring(0, 10)}</li>
                <li className="px-5">- {user.membership.substring(0,1)}{user.membership.toLowerCase().substring(1)}</li>
            </ul>        
            <br/>
            </div>
        )
    ))

        // Get print jobs from database
        fetch("http://localhost:5000/jobs")
        .then(res => res.json())
        .then(data => setPrintJobs(
        data.map((job: {
            _id: {student_id: number, order_id: number},
            file: {location: string, size: number},
            status: string,
            label: string,
            order_placed: string
            purchase_info: {cost: number}
        }) =>
            <div className="px-5">
            <div className="text-xl">Print Job - {job._id.student_id} #{job._id.order_id+1}</div>
            <ul>
                <li className="px-5">- Order placed: {job.order_placed.substring(0, 10)}</li>
                <li className="px-5">- Cost: ${job.purchase_info.cost.toFixed(2)}</li>
                <li className="px-5">- Description: {job.label ? job.label : "<none>"}</li>
                <li className="px-5">- File name: {job.file.location.split("/").pop()}</li>
                <li className="px-5">- File size: {job.file.size} kb</li>
            </ul>        
            <br/>
            </div>
        )
        ))

        // Get total cost of orders in queue
        fetch("http://localhost:5000/cost")
        .then(res => res.json())
        .then(data => setCost(Math.round(data[0].totalCost*100)/100))
    }, []);

    return (
        <div className="py-10 px-10">
            <div className="text-3xl">USERS:</div><br/>
                {users}
              <br/><hr/><br/>
              <div className="text-3xl">PRINT JOBS:</div><br/>
              {printJobs}
        
              <br/><hr/><br/>
        
              <div className="text-3xl">ACCOUNTING:</div><br/>
              <div className="px-5">Total cost of jobs in-queue: ${cost}</div>
        </div>
    );
}