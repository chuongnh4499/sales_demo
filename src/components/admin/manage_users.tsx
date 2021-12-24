
function ManageUsers() {
    return (
        <div >
            <h2>Manage Users</h2>
            <table style={{margin: 'auto'}}>
                <tr>
                    <th>User Account</th>
                    <th colSpan={2}>Actions</th>
                </tr>
                <tr>
                    <td>abc@g.com.vn</td>
                    <td><button>Accept</button></td>
                    <td><button>Reject</button></td>
                </tr>
                <tr>
                    <td>abc@g.com.vn</td>
                    <td><button>Accept</button></td>
                    <td><button>Reject</button></td>
                </tr>
                <tr>
                    <td>abc@g.com.vn</td>
                    <td><button>Accept</button></td>
                    <td><button>Reject</button></td>
                </tr>
                <tr>
                    <td>abc@g.com.vn</td>
                    <td><button>Accept</button></td>
                    <td><button>Reject</button></td>
                </tr>
            </table>
        </div>
    )
}

export default ManageUsers
