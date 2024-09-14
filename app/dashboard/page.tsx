import Image from "next/image"

export default function Dash() { 
    return (
        <div>
            <div>
                Hi
            </div>
            <Image
                src="/face.png"
                alt="my face"
                width={200}
                height={200}
            />
            <div>About Me</div>
            <div>Developing Solutions</div>
            <div>My Projects</div>
            <ul>
                <li>Create Patient App</li>
                <li>Auto-protocoling</li>
                <li>Peer Learning PowerApp</li>
            </ul>
        </div>
    )
}