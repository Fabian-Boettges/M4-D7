import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap'

const AddComment = ({asin}) => {

    const [comment, setComment] = useState({comment: "", rate: 1, elementId: null })

    useEffect (() => {
        setComment({
            ...comment,
            elementId: asin,
        })
    },  [asin])

   // state = {
   //     comment: {
   //         comment: '',
   //         rate: 1,
   //         elementId: null
   //     }
   // }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.asin !== this.props.asin) {
    //         this.setState({
    //             comment: {
    //                 ...this.state.comment,
    //                 elementId: this.props.asin
    //             }
    //         })
    //     }
    // }

    const sendComment = async (e) => {
        e.preventDefault()
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
                method: 'POST',
                body: JSON.stringify(comment),
                headers: {
                    'Content-type': 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjM5YzhmYzNkNDM0NDAwMTUxYjlmMjgiLCJpYXQiOjE2NDc5NTQxNzIsImV4cCI6MTY0OTE2Mzc3Mn0.XyhYF3PXDAOGm1soYeELSDuOf174unyC0hJ7Mr1eKoI'
                }
            })
            if (response.ok) {
                // the comment has been sent succesfully!!
                alert('Comment was sent!')
            } else {
                console.log('error')
                alert('something went wrong')
            }
        } catch (error) {
            console.log('error')
        }
    }

    
    return (
        <div>
            <Form onSubmit={sendComment}>
                <Form.Group>
                    <Form.Label>Comment text</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Add comment here"
                        value={comment.comment}
                        onChange={e => setComment({
                            ...comment,
                            comment: e.target.value
                            
                        })}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Rating</Form.Label>
                    <Form.Control as="select" value={comment.rate}
                        onChange={e => setComment({
                            ...comment,
                            rate: e.target.value
                            
                        })}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
    
}

export default AddComment