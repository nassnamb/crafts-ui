import PropTypes from 'prop-types'
import styled from 'styled-components'


const CardLabel = styled.span`
  font-size: 22px;
  font-weight: normal;
  padding-left: 15px;
`

const CardTitle = styled.span`
  font-size: 22px;
  font-weight: normal;
  align-self: center;
`

const CardImage = styled.img`
  height: 150px;
  width: 150px;
  align-self: center;
  border-radius: 50%;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  border-radius: 30px;
  width: 300px;
  height: 300px;
  &:hover {
    cursor: pointer;
  }
`

function Category({ label, picture }) {


    return (
        <CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="category" />
        </CardWrapper>
    )
}

Category.propTypes = {
    label: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}

Category.defaultProps = {
    label: '',
    picture: '',
}

export default Category;