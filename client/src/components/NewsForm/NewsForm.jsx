import {useForm} from "react-hook-form";
import {useState} from "react";

const NewsForm = () => {
    const [token, setToken] = useState(null);
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
    console.log(data);

    fetch('http://your-api-url.com/news', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
        console.error('Error:', error);
    });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="token" ref={register({ required: true })} onChange={e => setToken(e.target.value)} />
            {errors.token && <span>This field is required</span>}
            
            <input name="title" ref={register({ required: true })} placeholder="News Title" />
            {errors.title && <span>This field is required</span>}
            
            <textarea name="content" ref={register({ required: true })} placeholder="News Content" />
            {errors.content && <span>This field is required</span>}
            
            <input type="file" name="image" ref={register({ required: true })} />
            {errors.image && <span>This field is required</span>}
            
            <input type="submit" />
        </form>
    );
};

export default NewsForm;