import { defineType } from 'sanity'

export const empoweringBusinessCard = defineType({
  name: 'empoweringBusinessCard',
  title: 'Empowering Business Card',
  type: 'document',
  fields: [
    {
      name: 'millionsNumber',
      title: 'Millions Number',
      type: 'string',
      description: 'e.g., "9.4m+", "10.6m+", "45.2m+"',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'subTitleColorHex',
      title: 'Subtitle Color (Hex)',
      type: 'string',
      description: 'Hex color code (e.g., #ff7ea3)',
      validation: Rule => Rule.regex(/^#[0-9A-Fa-f]{6}$/).error('Must be a valid hex color code')
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'gradientFrom',
      title: 'Gradient From Color',
      type: 'string',
      description: 'Starting gradient color (hex)',
      validation: Rule => Rule.regex(/^#[0-9A-Fa-f]{6}$/).error('Must be a valid hex color code')
    },
    {
      name: 'gradientTo',
      title: 'Gradient To Color',
      type: 'string',
      description: 'Ending gradient color (hex)',
      validation: Rule => Rule.regex(/^#[0-9A-Fa-f]{6}$/).error('Must be a valid hex color code')
    },
    {
      name: 'borderColor',
      title: 'Border Color',
      type: 'string',
      description: 'Card border color (hex)',
      validation: Rule => Rule.regex(/^#[0-9A-Fa-f]{6}$/).error('Must be a valid hex color code')
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this card should appear (1, 2, 3, etc.)',
      validation: Rule => Rule.required().min(1)
    }
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [
        { field: 'order', direction: 'asc' }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      order: 'order',
      media: 'backgroundImage'
    },
    prepare(selection) {
      const { title, subtitle, order } = selection
      return {
        title: `${order}. ${title}`,
        subtitle: subtitle
      }
    }
  }
})