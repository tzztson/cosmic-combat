import '../components/caption.scss'

const Caption = ({ title }) => {
    return (
        <div className='caption'>
            <p>{title}</p>
        </div>
    )
}

export default Caption;