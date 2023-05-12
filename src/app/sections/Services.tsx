import Service from '../components/Service'
import { BiSupport } from 'react-icons/bi'
import {
  TbTruckDelivery,
  TbShoppingCartDiscount,
  TbReceiptRefund
} from 'react-icons/tb'

export default function Services() {
  return (
    <section className="text-center py-10 bg-primary/10">
      <div className="px-12 flex flex-wrap justify-between gap-8">
        <Service
          icon={<BiSupport size={55} color="rgb(32, 32, 32)" />}
          title="Suporte"
          description="Atendimento ágil 24/7"
        />
        <Service
          icon={<TbTruckDelivery size={55} color="rgb(32, 32, 32)" />}
          title="Entrega"
          description="Prazo máximo de 7 dias"
        />
        <Service
          icon={<TbShoppingCartDiscount size={55} color="rgb(32, 32, 32)" />}
          title="Descontos"
          description="Preços imbatíveis "
        />
        <Service
          icon={<TbReceiptRefund size={55} color="rgb(32, 32, 32)" />}
          title="Reembolso"
          description="Garantia de 30 dias"
        />
      </div>
    </section>
  )
}
