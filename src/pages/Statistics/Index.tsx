import { HeaderStatistic } from '@components/HeaderStatistic';
import { WraperStatistic, GroupColumns, TitleNumber, TitleDescription, GroupRowAll, GroupRow, CardsColorRedOrGreen, Title } from './styles';

type Props = {
  type?: CardsColorRedOrGreen
}

export function Statistics({ type }: Props) {

  return (
    <>
      <HeaderStatistic
        porcentage='90.86%'
        description='das refeições dentro da dieta'
      />


      <WraperStatistic>

        <Title>
          Estatísticas gerais
        </Title>

        <GroupColumns>
          <TitleNumber>
            4
          </TitleNumber>

          <TitleDescription>
            melhor sequência de pratos dentro da dieta
          </TitleDescription>
        </GroupColumns>


        <GroupColumns>
          <TitleNumber>
            109
          </TitleNumber>

          <TitleDescription>
            refeições registradas
          </TitleDescription>
        </GroupColumns>


        <GroupRowAll>
          <GroupRow
            type='GREEN'
          >
            <TitleNumber>
              32
            </TitleNumber>

            <TitleDescription>
              refeições dentro da {'\n'} dieta
            </TitleDescription>
          </GroupRow>

          <GroupRow
            type='RED'
          >
            <TitleNumber>
              77
            </TitleNumber>

            <TitleDescription>
              refeições fora da {'\n'} dieta
            </TitleDescription>
          </GroupRow>
        </GroupRowAll>

      </WraperStatistic>
    </>
  )
}