import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";


const meta = {
    title:'MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    parameters:{
        layout:'centered'
    },
    argTypes:{
        size:{ control: 'inline-radio' },
        fontColor:{ control: 'color'}
    }
} satisfies Meta<typeof MyLabel>

export default meta;
type Story = StoryObj<typeof meta>



export const Basic: Story = {
    args:{
        label:'Basic label',
        size:'h1',
        color:'text-primary'
    }
}

export const AllCaps: Story = {
    args:{
        label:'All Caps label',
        size:'normal',
        color:'text-secondary'
    }
}

export const Secondary: Story = {
    args:{
        label:'Secondary label',
        color:'text-tetiary'
    }
}

export const CustomColor: Story = {
    args:{
        label:'Custom color label',
        fontColor:'#5517ac'
    }
}

export const CustomBackgroundColor: Story = {
    args:{
        size:'h1',
        label:'Custom color label',
        fontColor:'white',
        backgroundColor:'black'
    }
}






//? Sintaxis basica de stories
//* Esta sintaxis lo que va hacer es que va inferir la informacion que nuestro componente tenga,
//* recibe properties, como lucen las properties y se encarga de hacer la mayor parte del trbajo pesado
//* por nosotros, intenta  hacer todas las configuraciones automaticamente.

//? Meta
//* meta, es la informacion que vamos a tener sobre la pagina como tal, y sobre cierta informacion que
//* podemos decirle que riga ala hora de tener nuestro editor visual

//* En programación, el término "metadata" se refiere a información descriptiva que proporciona contexto
//* y detalles sobre otros datos o elementos en un sistema. La metadata no forma parte directamente de 
//* los datos con los que se asocia, pero puede ser fundamental para entender, organizar, validar o 
//* gestionar esos datos.