import { useState } from "react"
import {
  FormControl,
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  ListGroup,
} from "react-bootstrap"

import { Link } from "react-router-dom"

import { Song } from "../types/song"

export default function Homepage() {
  const [search, setSearch] = useState("")
  const [songs, setSongs] = useState<Song[]>([])

  const fetchSongs = async (search: string) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${search}`
      )
      if (response.ok) {
        const { data } = await response.json()
        setSongs(data)
        //console.log(data)
      } else {
        console.log("error on fetching songs")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={e => setSearch(e.target.value)}
            />
            <Button variant="outline-success" onClick={e => fetchSongs(search)}>
              Search
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          {songs.map(song => (
            <ListGroup>
              <ListGroup.Item>
                <Link to={`/${song.id}`}>{song.title}</Link>
              </ListGroup.Item>
            </ListGroup>
          ))}
        </Col>
      </Row>
    </Container>
  )
}
