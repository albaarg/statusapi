import Status from './Status';

export const ListApis = [
  {
    name: "Accounts",
    api: "https://api.factoryfour.com/accounts/health/status"
  },
  {
    name: "Assets",
    api: "https://api.factoryfour.com/assets/health/status"
  },
  {
    name: "Customers",
    api: "https://api.factoryfour.com/customers/health/status"
  },
  {
    name: "Datapoints",
    api: "https://api.factoryfour.com/datapoints/health/status"
  },
  {
    name: "Devices",
    api: "https://api.factoryfour.com/devices/health/status"
  },
  {
    name: "Documents",
    api: "https://api.factoryfour.com/documents/health/status"
  },
  {
    name: "Forms",
    api: "https://api.factoryfour.com/forms/health/status"
  },
  {
    name: "Invites",
    api: "https://api.factoryfour.com/invites/health/status"
    //error503
  },
  {
    name: "Media",
    api: "https://api.factoryfour.com/media/health/status"
  },
  {
    name: "Messages",
    api: "https://api.factoryfour.com/messages/health/status"
  },
  {
    name: "Namespaces",
    api: "https://api.factoryfour.com/namespaces/health/status"
  },
  {
    name: "Orders",
    api: "https://api.factoryfour.com/orders/health/status"
  },
  {
    name: "Patients",
    api: "https://api.factoryfour.com/patients/health/status"
  },
  {
    name: "Relationships",
    api: "https://api.factoryfour.com/relationships/health/status"
  },
  {
    name: "Rules",
    api: "https://api.factoryfour.com/rules/health/status"
  },
  {
    name: "Remplates",
    api: "https://api.factoryfour.com/remplates/health/status"
  },
  {
    name: "Users",
    api: "https://api.factoryfour.com/users/health/status"
  },
  {
    name: "Workflows",
    api: "https://api.factoryfour.com/workflows/health/status"
  }
]

function Statuses() {
  return (
    <div>
      <p className="text-4xl font-bold p-5 m-5...">Status Page</p>
      <div className="bg-green-600 p-4 m-4 ml-36 mr-36 rounded w-2/3 shadow-2xl">
        <p className="text-left text-white">All Systems Operational</p>
      </div>
      <div className="grid grid-cols-2 gap-4 p-2 m-2">
      {ListApis.map((list) => (
      <Status
      key={list.id}
      name={list.name}
      api={list.api}/>
    ))}
    </div>
    </div>
  )
}

export default Statuses;

















