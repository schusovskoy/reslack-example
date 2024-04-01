import { Home, type Component, type HandlersConfig } from 'slack-thunder'
import { HomeModal } from './HomeModal'

const HomeTab: Component = () => (
  <Home>
    <actions block_id="button">
      <button action_id={HomeModal}>Open Modal</button>
    </actions>
  </Home>
)

export const config: HandlersConfig = {
  events: [{ pattern: 'app_home_opened', component: HomeTab }],
}
