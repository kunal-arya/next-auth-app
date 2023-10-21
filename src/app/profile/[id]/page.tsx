
const UserProfile = ({ params }: { params: { id: string } }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p className="text-4xl">Profile page
                <span className="ml-2 p-2 rounded bg-orange-500 text-black">{params.id}</span>
            </p>
        </div>
    )
}

export default UserProfile