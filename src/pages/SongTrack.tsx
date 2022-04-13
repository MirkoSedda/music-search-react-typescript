import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Song } from "../types/song"

export default function SongTrack() {
  const [song, setSong] = useState<Song>()

  const params = useParams()

  console.log(params.id)

  useEffect(() => {
    let id = params.id
    id && fetchSong(id)
  }, [])

  const fetchSong = async (id: string) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/track/${id}`
      )
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        setSong(data)
      } else {
        console.log("error on getting specific track")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>{song?.artist?.name}</h1>
      <h1> {song?.title}</h1>
    </div>
  )
}
