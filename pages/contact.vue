<template>
	<div>
		HELLO CONTACT
	</div>
	<div>
		<NuxtLink to="/">Back Home</NuxtLink>
	</div>

	<div>
		<Select :options="destinationContinents">
			<template #option="slotProps">
				<div class="pl-2">{{ slotProps.option.title }}</div>
			</template>
		</Select>
	</div>


</template>

<script lang="ts" setup>

const destinationContinents: any = ref([
	{
		id: 3,
		title: 'Africa (excluding Southern and South Africa)',
		children: [
			{
				id: 14,
				title: 'Morocco',
				code: 'MA'
			},
			{
				id: 39,
				title: 'Egypt',
				code: 'EG'
			},
			{
				id: 80,
				title: 'Tanzania',
				code: 'TZ'
			},
		]
	},
	{
		id: 4,
		title: 'Australasia & Oceania',
		children: [
			{
				id: 22,
				title: 'New Zealand',
				code: 'NZ'
			}
		]
	},
	{
		id: 5,
		title: 'Europe',
		children: [
			{
				id: 53,
				title: 'France',
				code: 'FR'
			},
			{
				id: 54,
				title: 'Germany',
				code: 'DE'
			},
			{
				id: 56,
				title: 'Iceland',
				code: 'IS'
			},
			{
				id: 57,
				title: 'Italy',
				code: 'IT'
			},
			{
				id: 62,
				title: 'Slovenia',
				code: 'SI'
			},
			{
				id: 64,
				title: 'Switzerland',
				code: 'CH'
			},
			{
				id: 65,
				title: 'Netherlands',
				code: 'NL'
			},
			{
				id: 67,
				title: 'Croatia',
				code: 'HR'
			},
			{
				id: 82,
				title: 'Greece',
				code: 'GR'
			},
			{
				id: 83,
				title: 'Portugal',
				code: 'PT'
			},
			{
				id: 84,
				title: 'Spain',
				code: 'ES'
			},
			{
				id: 190,
				title: 'Finland',
				code: 'FI'
			},
		]
	},
	{
		id: 6,
		title: 'Far East',
		children: [
			{
				id: 18,
				title: 'Bali',
				code: ''
			},
			{
				id: 0,
				title: 'Vietnam',
				code: 'VN'
			},
			{
				id: 0,
				title: 'Singapore',
				code: 'SG'
			},
			{
				id: 35,
				title: 'Thailand',
				code: 'TH'
			},
			{
				id: 0,
				title: 'Philippines',
				code: 'PH'
			},
			{
				id: 0,
				title: 'Malaysia',
				code: 'MY'
			},
		]
	},
	{
		id: 7,
		title: 'Indian Ocean Islands',
		children: [
			{
				id: 24,
				title: 'Maldives',
				code: 'MV'
			},
			{
				id: 25,
				title: 'Mauritius',
				code: 'MU'
			},
			{
				id: 26,
				title: 'Seychelles',
				code: 'SC'
			},
			{
				id: 0,
				title: 'Reunion',
				code: 'RE'
			},
			{
				id: 0,
				title: 'Madagascar',
				code: 'MG'
			},
		]
	},
	{
		id: 8,
		title: 'Middle East & India',
		children: [
			{
				id: 36,
				title: 'Abu Dhabi',
				code: 'AE'
			},
			{
				id: 38,
				title: 'Dubai',
				code: 'AE'
			},
			{
				id: 245,
				title: 'Qatar',
				code: 'QA'
			},
			{
				id: 247,
				title: 'United Arab Emirates',
				code: 'AE'
			},
		]
	},
	{
		id: 71,
		title: 'South Africa',
		children: [
			{
				id: 48,
				title: 'Cape Town',
				code: 'ZA'
			},
			{
				id: 69,
				title: 'Mpumalanga',
				code: 'ZA'
			},
			{
				id: 0,
				title: 'South Africa',
				code: 'ZA'
			},
			{
				id: 72,
				title: 'Western Cape',
				code: 'ZA'
			},
			{
				id: 147,
				title: 'Eastern Cape',
				code: 'ZA'
			},
			{
				id: 148,
				title: 'Gauteng',
				code: 'ZA'
			},
			{
				id: 149,
				title: 'Limpopo',
				code: 'ZA'
			},
			{
				id: 150,
				title: 'North West Province',
				code: 'ZA'
			},
			{
				id: 151,
				title: 'Sun City',
				code: 'ZA'
			},
			{
				id: 192,
				title: 'Clanwilliam',
				code: 'ZA'
			},
			{
				id: 221,
				title: 'Kwa-Zulu Natal',
				code: 'ZA'
			},
		]
	},
]);


</script>

<style></style>