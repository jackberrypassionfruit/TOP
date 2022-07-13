// Setting up 16x16 grid of squares

const gridSize = 16;

outerContainer = document.querySelector('.outer-container')

for (let i = 0; i < gridSize; i++)
{
  innerContainer = document.createElement('div')
  innerContainer.classList = ['.inner-container']

  for (let j = 0; j < gridSize; j++)
  {
    const block = document.createElement('div');
    block.classList = ["block"]
    const para = document.createElement('p');
    para.innerText = "";
    // Making the squares change color on hover
    block.addEventListener('mouseover', (e) => {
      e.currentTarget.style.backgroundColor = 'green';
      // console.log(e.currentTarget);
    })

    block.appendChild(para);
    innerContainer.appendChild(block);
  }
  outerContainer.appendChild(innerContainer);
}