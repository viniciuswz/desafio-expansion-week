import styled from 'styled-components';

export const TerminalItem = styled.div`
  overflow: hidden;
  border-radius: 8px;
  max-width: 600px;
  width: 90%;
  margin: 0 auto;
  padding: 0 10px;
  background: #171717;

  header{

    height: 30px;
    display: flex;
    align-items: center;
    .green, .yellow, .red{
      width: 13px;
      height: 13px;
      display: inline-block;
      border-radius: 50%;
      margin-right: 10px;
    }
    .green{
      background: #3BB662;
    }

    .yellow{
      background: #E5C30F;
    }

    .red{
      background: #E75448;
    }

  }
  section{
    overflow: hidden;
    color: white;
    div{
      padding: 32px 0;
      font-size: 1.4rem;
      span{
        color: #85838E;
      }
    }
  }

 `;


export const TerminalContainer = styled.section`
  max-width: 1366;
  margin: 0 auto;
  background-color: #000;
  height: 100vh;
  display: flex;
  justify-content:center;
  align-items: center;
`
