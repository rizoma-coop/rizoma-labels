# Rizoma Labels

A web application for generating and printing product labels for RizomaCoop. The application fetches product data from a Google Sheets spreadsheet and generates printable labels with product information, pricing, and sustainability scores.

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- pnpm (recommended) or npm
- Google Sheets API key
- Access to the RizomaCoop product spreadsheet

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rizoma-labels
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Copy the `.env.example` file and rename it to `.env`

4. Edit the `.env` file with your actual values:
   - `VITE_SHEET_ID`: Your Google Sheets document ID
   - `VITE_SHEET_NAME`: The name of the specific sheet
   - `VITE_SHEET_COLUMNS`: Comma-separated list of column ranges
   - `VITE_API_KEY`: Your Google Sheets API key

### Development

Start the development server:
```bash
pnpm dev
# or
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Build the application:
```bash
pnpm build
# or
npm run build
```

Preview the production build:
```bash
pnpm preview
# or
npm run preview
```

## Usage

1. **Data Source**: The application automatically fetches product data from the configured Google Sheets spreadsheet
2. **Label Display**: Product labels are displayed with:
   - Product name and brand
   - Price per unit
   - Cost details (cost price, VAT, markup)
   - Sustainability scores with color coding
3. **Printing**: Click the "Imprimir" (Print) button to print the labels

## Configuration

### Environment Variables

- `VITE_SHEET_ID`: The ID of your Google Sheets document
- `VITE_SHEET_NAME`: The name of the specific sheet within the document
- `VITE_SHEET_COLUMNS`: Comma-separated list of column ranges to fetch
- `VITE_API_KEY`: Your Google Sheets API key

### Google Sheets Setup

The application expects the spreadsheet to have the following structure:
- Product name
- Unit (e.g., "lt" for liters)
- Brand
- VAT percentage
- Markup information
- Sustainability scores and descriptions
- Final sustainability score

## Technologies Used

- **Vite**: Fast build tool and development server
- **TypeScript**: Type-safe JavaScript
- **Google Sheets API**: Data source integration
- **CSS3**: Modern styling with print optimization
- **HTML5**: Semantic markup

## Development Scripts

- `pnpm dev` / `npm run dev`: Start development server
- `pnpm build` / `npm run build`: Build for production
- `pnpm preview` / `npm run preview`: Preview production build

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project proprietary to RizomaCoop.

## Support

For support or questions, please contact the development team.
