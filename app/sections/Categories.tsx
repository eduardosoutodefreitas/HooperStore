'use client'
import { SectionSubtitle, SectionTitle } from '../components/SpecialText'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../config/firebase.config'
import Category from '../types/Category.types'
import { useEffect, useState } from 'react'

export default function Categories() {
  return (
    <section className="my-10 mt-16">
      <SectionTitle title="Categorias" />
      <SectionSubtitle subtitle="Explore nossos produtos por categoria" />
    </section>
  )
}
