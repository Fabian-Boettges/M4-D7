import { useEffect, useState } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

const CommentArea = ({asin}) => {

    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    // state = {
    //     comments: [], // comments will go here
    //     isLoading: false,
    //     isError: false
    // }

    useEffect( () => {
        fetchData()
    }, [asin] )

    

    const fetchData = async () => {
        setLoading(true)
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjM5YzhmYzNkNDM0NDAwMTUxYjlmMjgiLCJpYXQiOjE2NDc5NTQxNzIsImV4cCI6MTY0OTE2Mzc3Mn0.XyhYF3PXDAOGm1soYeELSDuOf174unyC0hJ7Mr1eKoI'
                }
            })
            console.log(response)
            if (response.ok) {
                let comments = await response.json()
                setComments(comments)
                setLoading(false)
                setError(false) 
            } else {
                console.log('error')
                setLoading(false)
                setError(true)
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
            setError(true)
        }
            
    }

    return (
        <div>
            {loading && <Loading />}
            {error && <Error />}
            <AddComment asin={asin} />
            <CommentList commentsToShow={comments} />
        </div>
    )
    
}

export default CommentArea