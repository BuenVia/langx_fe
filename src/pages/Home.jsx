import axios from "axios";
import { useEffect, useState } from "react";


const Home = () => {

    const [levels, setLevels] = useState([])
    const [groups, setGroups] = useState([])

    const levelUrl = 'http://127.0.0.1:8000/api/levels'
    const groupUrl = 'http://127.0.0.1:8000/api/groups'

    const getLevels = async () => {
        try {
            axios.get(levelUrl).then(res => setLevels(res.data))
        } catch (error) {
            console.log(error);
        }
    }

    const getGroups = async () => {
        try {
            axios.get(groupUrl).then(res => setGroups(res.data))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getLevels()
        getGroups()
    }, [])

    return (
        <div>

            <h1>Home</h1>
            {levels.map(level => {
                return (
                    <button key={level.id}>{level.level}</button>
                )
            })}

            {groups.map(group => {
                return (
                    <div>
                        <a key={group.id} href={`/practice/${group.id}`}>{group.level}: {group.group}</a>
                    </div>
                )
            })}
        </div>
    );
  };
  
  export default Home;