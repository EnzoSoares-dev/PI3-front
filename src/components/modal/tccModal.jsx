import React,{ useState }  from "react"
import Modal from "react-modal"
import { InputText } from "../inputs/text/text"
import { Primary } from "../buttons/primary/primary"
import { Delete } from "../buttons/delete/delete"
import { useNavigate } from "react-router-dom"
import { client } from "../../service/comunication"
import { decodeToken } from "react-jwt"

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
export const TccModal = ({idProcesso})=>{
    const [modalIsOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()
    const [process, setProcess] = useState([])


    const handleChange = (e) => {
        const { name, value } = e.target
        const updateProcess = [
            ...process,
            {
                type: name,
                content: value
            }
        ]
        setProcess(updateProcess)      
    }
    const handleSubmit = async ()=>{
        const token = decodeToken(sessionStorage.getItem('token'))
        console.log(token.id)
        const algo = await client.put(`/processo/update/${idProcesso}/${token.id}`,process)
        .then((res)=>{
            alert('Processo seletivo editado com sucesso')
            window.location.reload(false);
        })
    }
    const handleDelete = async () => {
        const token = decodeToken(sessionStorage.getItem('token'))
        const algo = await client.delete(`/processo/delete/${idProcesso}/${token.id}`)
        .then((res)=>{
            alert('Processo seletivo deletado com sucesso')
            window.location.reload(false);
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return(
        <div>
            <Primary label={'Editar'} onClick={openModal}/>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
                <InputText type={'text'} placeholder={'Nome'} name={'name'} onChange={handleChange}/>
                <InputText type={'text'} placeholder={'Description'} name={'description'} onChange={handleChange}/>
                <InputText type={'number'} placeholder={'Etapas'} name={'steps'} onChange={handleChange}/>
                <InputText type={'date'}name={'start_date'} onChange={handleChange}/>
                <InputText type={'date'} name={'end_date'} onChange={handleChange}/>
                <br/>
                <Primary label={'Enviar'} onClick={handleSubmit}/>
                <Delete label={'Deletar'} onClick={handleDelete}/>
            </Modal>
        </div>
    )
}