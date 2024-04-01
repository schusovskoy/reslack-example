import {
  Modal,
  createState,
  useState,
  type Component,
  type HandlersConfig,
  type WithHandlerProps,
} from 'slack-thunder'

export const HomeModal: Component = () => {
  const [, stateRef] = useState(state)
  return (
    <Modal title="Home Modal" submit="Submit" callbackId={Submit} notifyOnClose>
      <input label="Text Input" block_id="textInput">
        <plain_text_input action_id={stateRef.textInput} />
      </input>
    </Modal>
  )
}

const Submit: Component<WithHandlerProps<object, 'eventType'>> = ({
  eventType,
}) => {
  const [currentState] = useState(state)
  console.log(currentState.textInput, eventType)
}

const state = createState(HomeModal, {
  textInput: 'plain_text_input',
})

export const config: HandlersConfig = {
  actions: [HomeModal],
  submissions: [{ component: Submit, handleClose: true }],
}
