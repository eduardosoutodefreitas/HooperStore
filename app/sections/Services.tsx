import Service from '../components/Service'
import { BiSupport } from 'react-icons/bi'
import {
  TbTruckDelivery,
  TbShoppingCartDiscount,
  TbReceiptRefund
} from 'react-icons/tb'

export default function Services() {
  return (
    <section className="my-24 px-7 flex justify-between items-center p-5">
      <Service
        icon={<BiSupport size={55} />}
        title="Suporte"
        description="Atendimento ágil 24/7"
      />
      <Service
        icon={<TbTruckDelivery size={55} />}
        title="Entrega"
        description="Frete grátis em compras acima R$100,00"
      />
      <Service
        icon={<TbShoppingCartDiscount size={55} />}
        title="Descontos"
        description="Ofertas diárias de até 70% off"
      />
      <Service
        icon={<TbReceiptRefund size={55} />}
        title="Reembolso"
        description="Garantia de 30 dias em todos os produtos"
      />
    </section>
  )
}
