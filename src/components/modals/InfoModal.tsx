import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Como jogar" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Descubra a palavra em no máximo 6 tentativas.
        Cada tentativa ira fornecer dicas sobre o quão perto está de acertar.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="C" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="U"
          status="correct"
        />
        <Cell value="C" />
        <Cell value="H" />
        <Cell value="I" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A letra U está na palavra e no lugar certo.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="A" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="L"
          status="present"
        />
        <Cell value="U" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A letra L está na palavra mas no lugar errado.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="N" />
        <Cell value="A" />
        <Cell value="R" />
        <Cell isRevealing={true} isCompleted={true} value="J" status="absent" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A letra J não existe em nenhum lugar da palavra.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Fork e modificação a partir desse projeto -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          aqui
        </a>{' '}
      </p>
    </BaseModal>
  )
}
